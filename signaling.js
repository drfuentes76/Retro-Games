
let peers = {};

export function connectToSignalingServer(playerName) {
  console.log(`Connecting to signaling server as ${playerName}...`);
  // In real setup, use WebSocket to coordinate peer connections
  // For example: ws://your-signaling-server.com
}

export function broadcastInput(inputState) {
  // Send input to all connected peers
  console.log('Broadcasting input:', inputState);
}
