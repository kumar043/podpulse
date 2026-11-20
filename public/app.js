async function loadStatus() {
  const statusText = document.querySelector("#status");
  const podText = document.querySelector("#pod");
  const uptimeText = document.querySelector("#uptime");

  try {
    const response = await fetch("/api/status");

    if (!response.ok) {
      throw new Error("Could not get app status");
    }

    const data = await response.json();

    statusText.textContent = data.status;
    podText.textContent = data.pod;
    uptimeText.textContent = `${data.uptimeSeconds} seconds`;
  } catch (error) {
    statusText.textContent = "App is not responding";
    podText.textContent = "-";
    uptimeText.textContent = "-";
  }
}

document.querySelector("#refresh").addEventListener("click", loadStatus);

loadStatus();