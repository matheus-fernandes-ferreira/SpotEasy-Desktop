/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */

// var db = new loki.Loki('db.json') // Use loki do contextBridge

// var veiculo = db.addCollection('veiculo');
// veiculo.insert ({
//   placa: 'asd0145',
//   modelo: 'Corola',
//   cor: 'preto',
//   tipo_veiculo: 'Carro'
// })
// db.save()