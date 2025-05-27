function getApiBaseUrl(): string {
  // Ersetze die Portnummer im Subdomain-Teil durch 3000
  const host = window.location.host.replace(/-\d+\./, '-3000.');
  return `https://${host}`;
}

export const environment = {
  production: false,
  apiBaseUrl: getApiBaseUrl()
};