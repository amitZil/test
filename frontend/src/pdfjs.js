export default class PDFJs {
    init = (source,element) => {
        const iframe = document.createElement('iframe');

        iframe.src = `/pdfjs-2.0.943-dist/web/viewer.html?file=${source}`;
        iframe.width = '100%';
        iframe.height = '100%';

    element.appendChild(iframe);
      
    }
  }