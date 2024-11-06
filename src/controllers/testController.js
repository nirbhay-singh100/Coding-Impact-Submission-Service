async function pingController(req, res) {
  const data = await this.testService.pingCheck();

  return res.send({ data: data });
}

module.exports = pingController;
