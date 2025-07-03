
let localStream = null;
let peerConnection = null;

export async function initVoiceStream() {
  try {
    localStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    console.log('🎙 Microphone access granted.');

    // Stub: No signaling or peer connection established here
    // In real use, pass stream to remote peer via RTCPeerConnection
  } catch (err) {
    console.error('🎙 Microphone access failed:', err);
  }
}

export function stopVoiceStream() {
  if (localStream) {
    localStream.getTracks().forEach(track => track.stop());
    console.log('🎙 Microphone turned off.');
  }
}
