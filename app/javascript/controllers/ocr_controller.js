import { Controller } from "@hotwired/stimulus"
import Tesseract from 'tesseract.js';

// Connects to data-controller="ocr"
export default class extends Controller {
  upload(event) {
    console.log("ok")
    Tesseract.recognize(
      event.currentTarget.files[0],
      'fra',
      { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
      // Fill the textarea with the return of Tesseract
      document.getElementById('display-content').innerHTML = text
      
      // Fill the hidden inputs title and image inputs, and the return of Tesseract
      // (for the create method in case of user wants to save)
      document.getElementById('title-input').value = document.getElementById('first-title-input').value
      document.getElementById('content-input').value = text
      document.getElementById('image-input').value = document.getElementById('first-image-input').value
    })
  }
}