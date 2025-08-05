const args = process.argv.slice(2);

// 检查是否有参数传入
if (args.length > 0) {
  console.log('传入的参数:', args);
  
  // 获取第一个参数（即 -2601）
  const firstArg = args[0];
  console.log('第一个参数:', firstArg);
  
  // 如果需要提取数字部分（去掉前面的减号）
  const numberValue = parseInt(firstArg.replace(/-/g, ''), 10);
  console.log('提取的数字:', numberValue);
} else {
  console.log('没有传入任何参数');
}
