window.EXPERIMENT_CONFIG = {
  apiBaseUrl: "https://liz-syndication-hack-notify.trycloudflare.com", // 数据收集服务器
  emotionApiUrl: "https://joshua-contacted-semi-phone.trycloudflare.com" // 情感分析服务器
};

// 添加全局变量兼容性补丁 - 解决变量名称不匹配问题
window.API_BASE = window.API_BASE || window.EXPERIMENT_CONFIG.apiBaseUrl;
window.EMOTION_API_BASE = window.EMOTION_API_BASE || window.EXPERIMENT_CONFIG.emotionApiUrl;