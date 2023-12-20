const getCroppedUrl = (url:string) => {
    const target = 'media/'
    const index = url.indexOf(target) + target.length;
    const croppedUrl = url.slice(0, index) + 'crop/600/400/' + url.slice(index);
    console.log(croppedUrl);
    return croppedUrl;
}

export default getCroppedUrl;