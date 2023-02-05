export function getLayersUserData() {
  const userData = {
    userId: window.LayersPortal.userId,
    communityId: window.LayersPortal.communityId,
    session: window.LayersPortal.session,
  };

  return userData;
}

export async function initializeLayers() {
  const LayersPortal = window.LayersPortal;

  if (!LayersPortal || !window) return;
  await LayersPortal.readyPromise;

  if (!LayersPortal.platform || !LayersPortal.connected) throw new Error('Layers Portal is not connected');
  await LayersPortal.connectedPromise;
  getLayersUserData();
}

