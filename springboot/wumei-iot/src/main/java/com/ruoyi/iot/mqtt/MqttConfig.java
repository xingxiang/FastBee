package com.ruoyi.iot.mqtt;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

/**
 * @Classname MqttConfig
 * @Description mqtt配置信息
 * @author kerwincui
 */
@Component
@ConfigurationProperties("spring.mqtt")
public class MqttConfig {

    private static final Logger logger = LoggerFactory.getLogger(MqttConfig.class);

    @Autowired
    private EmqxClient emqxClient;

    /**
     * 用户名
     */
    private String username;
    /**
     * 密码
     */
    private String password;
    /**
     * 连接地址
     */
    private String hostUrl;
    /**
     * 客户Id
     */
    private String clientId;
    /**
     * 默认连接话题
     */
    private String defaultTopic;
    /**
     * 超时时间
     */
    private int timeout;
    /**
     * 保持连接数
     */
    private int keepalive;


    public String getusername()
    {
        return username;
    }
    public void setusername(String username) {this.username = username;}

    public String getpassword()
    {
        return password;
    }
    public void setpassword(String password) {this.password = password;}

    public String gethostUrl()
    {
        return hostUrl;
    }
    public void sethostUrl(String hostUrl) {this.hostUrl = hostUrl;}

    public String getclientId()
    {
        return "server-"+clientId;
    }
    public void setclientId(String clientId) {this.clientId = clientId;}

    public String getdefaultTopic()
    {
        return defaultTopic;
    }
    public void setdefaultTopic(String defaultTopic) {this.defaultTopic = defaultTopic;}

    public int gettimeout()
    {
        return timeout;
    }
    public void settimeout(int timeout) {this.timeout = timeout;}

    public int getkeepalive()
    {
        return keepalive;
    }
    public void setkeepalive(int keepalive) {this.keepalive = keepalive;}

    // @Bean
    public void EmqxClientStart() {
        logger.info("mqtt启动中...");
        emqxClient.connect(gethostUrl(), getclientId(), getusername(), getpassword(), gettimeout(), getkeepalive());
    }
}
