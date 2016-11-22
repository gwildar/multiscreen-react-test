let connections = 0; // count active connections

onconnect = (e) => {
  const port = e.ports[0];
  connections++;
  port.addEventListener('message', (f) => {
    const workerResult = `Hello ${f.data} (port # ${connections})`;
    port.postMessage(workerResult);
  });

  port.start(); // Required when using addEventListener.
};
