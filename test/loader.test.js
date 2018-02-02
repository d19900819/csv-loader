import compiler from './compiler.js';

test('Inserts name and outputs JavaScript', async () => {
  const stats = await compiler('多语言utf-8.csv');
  const output = stats.toJson().modules[0].source;
  expect(output).toBe("export default [[\"模块\",\"变量\",\"中文\",\"英文\"],[\"会控-下方操作按钮\",\"live_btn_text\",\"直播试用\",\"try start living\"],[\"会控-下方操作按钮\",\"live_QrCode_tips\",\"打开微信扫一扫或复制下面链接分享直播地址\",\"share your living address by scan the Qrcode.\"]]");
});