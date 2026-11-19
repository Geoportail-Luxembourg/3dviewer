async function createDepthArray(buffer) {
    const deflateStream = new DecompressionStream('deflate');
    const decompressedStream = buffer.stream().pipeThrough(deflateStream);
    const arrayBuffer = await new Response(decompressedStream).arrayBuffer();
    const depthData = new Uint16Array(arrayBuffer);
    const result = new Float32Array(depthData.length);
    for (let i = 0; i < depthData.length; i++) {
        result[i] = depthData[i] / 65535; // Normalize to [0, 1]
    }
    return result;
}
self.addEventListener('message', (e) => {
    const { id, buffer, fileDirectory } = e.data;
    const blob = new Blob([buffer]);
    let dataPromise;
    if (fileDirectory.vcsPanorama?.type === 'image') {
        dataPromise = createImageBitmap(blob, { imageOrientation: 'flipY' });
    }
    else if (fileDirectory.vcsPanorama?.type === 'depth') {
        dataPromise = createDepthArray(blob);
    }
    else {
        dataPromise = Promise.reject(new Error('Missing vcsPanorama metadata'));
    }
    dataPromise
        .then((decoded) => {
        self.postMessage({ decoded, id }, decoded instanceof ImageBitmap ? [decoded] : [decoded.buffer]);
    })
        .catch((error) => {
        self.postMessage({ error, id });
    });
});
export {};
//# sourceMappingURL=panoramaImageWorker.js.map