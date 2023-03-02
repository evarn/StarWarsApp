class ApiConfig {
  private baseUrl = 'https://swapi.dev/api/';
  public getBaseUrl() {
    return this.baseUrl;
  }
  public setBaseUrl(url: string) {
    this.baseUrl = url;
  }
}
const apiConfig = new ApiConfig();

export default apiConfig;
