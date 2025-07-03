
let isMicMuted = false;

export function toggleVoiceChat(state) {
  switch (state) {
    case 'on':
      isMicMuted = false;
      console.log('🎙 Voice chat turned ON');
      break;
    case 'mute':
      isMicMuted = true;
      console.log('🔇 Microphone muted');
      break;
    case 'unmute':
      isMicMuted = false;
      console.log('🎙 Microphone unmuted');
      break;
    case 'off':
      console.log('🔕 Voice chat turned OFF');
      break;
    default:
      console.warn('Invalid voice chat state');
  }
}
