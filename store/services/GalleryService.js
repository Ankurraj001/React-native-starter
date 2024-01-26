/* istanbul ignore file */
import HttpClient from "../../helpers/HTTPClient";

class GalleryService {
  async fetchImages() {
    const response = await HttpClient.get(
      "https://jsonplaceholder.typicode.com/photos"
    );
    console.log("first service response", response);
    return response;
  }
}

export default new GalleryService();
