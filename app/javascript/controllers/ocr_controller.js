import { Controller } from "@hotwired/stimulus"
import Tesseract from 'tesseract.js';

// Connects to data-controller="ocr"
export default class extends Controller {
  upload(event) {
    Tesseract.recognize(
      event.currentTarget.files[0],
      'fra',
      { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
      // Fill the textarea with the return of Tesseract
      document.getElementById('display-transcriptions').innerHTML = text
      
      // Fill the hidden input with the return of Tesseract
      // (for the create method in case of user wants to save)
      document.getElementById('transcriptions-input').value = text
    })
  }
}