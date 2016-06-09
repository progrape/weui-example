/**
 *
 * @param dataURI
 * @returns {global.Blob}
 */
export const dataURItoBlob = (dataURI) => {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], {type: mimeString});
};


/**
 *
 * @param file
 * @param ratio 如果是小于等于 1, 那么就是压缩比, 如果大于1, 那么就是绝对值
 * @param callback
 */
export function compress(file, ratio = 1, callback = () => {}) {
    const reader = new FileReader();
    reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
            const w = ratio <= 1 ? img.width * ratio : ratio;
            const h = img.height * (w / img.width);
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = w;
            canvas.height = h;

            ctx.drawImage(img, 0, 0, w, h);

            const dataURL = canvas.toDataURL();
            const blob = dataURItoBlob(dataURL);
            callback(null, {name: file.name, blob: blob});
        };

        img.onerror = (err) => {
            callback(err);
        };

        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}