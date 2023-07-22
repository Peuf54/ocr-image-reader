import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="synchronize-fields"
export default class extends Controller {
  synchronize() {
    document.getElementById('display-title').innerText = document.getElementById('first-title-input').value
  }
}
