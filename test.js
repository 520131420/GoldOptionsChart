const os = require('os');
const axios = require('axios');

// 获取当前操作系统信息
function getOSInfo() {
  const type = os.type();
  const release = os.release();
  
  let osName, osVersion;
  
  switch(type) {
    case 'Windows_NT':
      osName = 'Windows';
      // 简单处理Windows版本号
      osVersion = release.split('.')[0] === '10' ? '10' : release;
      break;
    case 'Darwin':
      osName = 'Macintosh';
      // macOS版本号转换 (如19.6.0 -> 10.15.6)
      const parts = release.split('.').map(Number);
      osVersion = `10.${parts[0] - 4}.${parts[1]}`;
      break;
    case 'Linux':
      osName = 'X11';
      osVersion = 'Linux x86_64';
      break;
    default:
      osName = type;
      osVersion = release;
  }
  
  return { osName, osVersion };
}

// 生成浏览器User-Agent头
function generateUserAgent() {
  const { osName, osVersion } = getOSInfo();
  
  // 模拟主流浏览器的UA格式
  const browserVersions = {
    chrome: '112.0.0.0',
    firefox: '111.0',
    safari: '16.4'
  };
  
  // 这里选择模拟Chrome浏览器
  return `Mozilla/5.0 (${osName}; ${osVersion}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${browserVersions.chrome} Safari/537.36`;
}

// 发送带有系统感知UA头的请求
async function sendRequest(url) {
  try {
    const userAgent = generateUserAgent();
    console.log('使用的User-Agent:', userAgent);
    
    const response = await axios.get(url, {
      headers: {
        'User-Agent': userAgent,
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1'
      }
    });
    
    return response.data;
  } catch (error) {
    console.error('请求失败:', error.message);
    throw error;
  }
}

// 使用示例
sendRequest('https://httpbin.org/user-agent')
  .then(data => console.log('响应:', data))
  .catch(err => console.error('错误:', err));
