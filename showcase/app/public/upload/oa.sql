/*
Navicat MySQL Data Transfer

Source Server         : 本机
Source Server Version : 50717
Source Host           : 127.0.0.1:3306
Source Database       : oa

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2021-07-14 13:48:31
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `role`
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '角色表',
  `roleName` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of role
-- ----------------------------
INSERT INTO `role` VALUES ('1', 'admin');
INSERT INTO `role` VALUES ('2', 'user');

-- ----------------------------
-- Table structure for `rolepermission`
-- ----------------------------
DROP TABLE IF EXISTS `rolepermission`;
CREATE TABLE `rolepermission` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '角色权限关联表',
  `roleId` int(11) DEFAULT NULL,
  `permissionId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of rolepermission
-- ----------------------------
INSERT INTO `rolepermission` VALUES ('1', '1', '1');
INSERT INTO `rolepermission` VALUES ('2', '2', '3');
INSERT INTO `rolepermission` VALUES ('3', '1', '2');

-- ----------------------------
-- Table structure for `test`
-- ----------------------------
DROP TABLE IF EXISTS `test`;
CREATE TABLE `test` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '修改后的字段注释',
  `name` varchar(200) DEFAULT NULL COMMENT '名字',
  `cdNum` int(11) DEFAULT NULL,
  `createTime` datetime DEFAULT NULL,
  `score` double(4,0) DEFAULT NULL COMMENT '渠道类型(0:订阅号,1:小程序,2:服务号)',
  `host` varchar(100) CHARACTER SET utf8mb4 DEFAULT NULL COMMENT '主机名',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of test
-- ----------------------------
INSERT INTO `test` VALUES ('1', '888', null, null, '0', null);
INSERT INTO `test` VALUES ('2', '123', '1', '2018-11-30 17:04:50', '1', null);
INSERT INTO `test` VALUES ('3', '123', '1', '2018-11-30 17:04:50', '1', null);
INSERT INTO `test` VALUES ('7', null, null, null, null, null);
INSERT INTO `test` VALUES ('8', null, null, null, null, null);
INSERT INTO `test` VALUES ('9', null, null, null, null, null);
INSERT INTO `test` VALUES ('10', null, null, null, null, null);
INSERT INTO `test` VALUES ('11', '吴翰文', '1', '2020-05-26 02:46:06', '0', null);
INSERT INTO `test` VALUES ('13', '吴翰文', '123', '2020-05-26 02:46:06', '0', null);
INSERT INTO `test` VALUES ('14', '吴翰文', '1', '2020-05-26 02:46:06', '0', null);
INSERT INTO `test` VALUES ('15', 'p78o2', '123', '2020-05-29 06:59:28', '0', null);
INSERT INTO `test` VALUES ('16', 'p78o2', '123', '2020-05-29 07:00:35', '0', null);
INSERT INTO `test` VALUES ('17', 'p78o3', '987', '2020-05-29 07:00:35', '0', null);
INSERT INTO `test` VALUES ('18', 'p78o2', '123', '2020-05-29 07:03:21', '0', null);
INSERT INTO `test` VALUES ('19', 'p78o3', '987', '2020-05-29 07:03:21', '0', null);
INSERT INTO `test` VALUES ('20', null, null, null, null, null);
INSERT INTO `test` VALUES ('21', 'p98o2', '1', '0161-05-23 03:40:00', '12', '127.0.0.1');
INSERT INTO `test` VALUES ('22', 'p98o2', '1', '0161-05-23 05:50:00', '12', '127.0.0.1');
INSERT INTO `test` VALUES ('23', 'arthsas', '1', null, null, null);
INSERT INTO `test` VALUES ('24', 'p98o2', '1', '2021-01-18 15:57:53', '12', '127.0.0.1');
INSERT INTO `test` VALUES ('25', 'p98o2', '1', '2021-01-18 16:02:48', '12', '127.0.0.1');
INSERT INTO `test` VALUES ('26', 'p98o2', '1', '2021-01-18 16:21:22', '12', '127.0.0.1');
INSERT INTO `test` VALUES ('27', 'p98o2', '1', '2021-01-20 11:07:41', '12', '127.0.0.1');
INSERT INTO `test` VALUES ('28', 'p98o2', '1', '2021-01-20 11:09:51', '12', '127.0.0.1');
INSERT INTO `test` VALUES ('29', 'p98o2', '1', '2021-01-20 17:08:00', '12', '?');
INSERT INTO `test` VALUES ('30', '新插入', '999', null, null, null);
INSERT INTO `test` VALUES ('31', '新插入2', '999', '2021-07-07 14:27:33', null, null);
INSERT INTO `test` VALUES ('34', '新插入3', '999', '2021-07-07 16:37:58', null, null);
INSERT INTO `test` VALUES ('35', '新插入4', '999', '2021-07-07 16:37:58', null, null);
INSERT INTO `test` VALUES ('36', '新插入3', '999', '2021-07-07 16:38:01', null, null);
INSERT INTO `test` VALUES ('37', '新插入4', '999', '2021-07-07 16:38:01', null, null);
INSERT INTO `test` VALUES ('38', '新插入2', '999', '2021-07-08 09:21:56', null, null);
INSERT INTO `test` VALUES ('39', '新插入2', '999', '2021-07-08 09:22:01', null, null);
INSERT INTO `test` VALUES ('40', '新插入2', '999', '2021-07-08 09:22:06', null, null);
INSERT INTO `test` VALUES ('41', '新插入2', '999', '2021-07-08 09:22:11', null, null);
INSERT INTO `test` VALUES ('42', '新插入2', '999', '2021-07-08 09:22:16', null, null);
INSERT INTO `test` VALUES ('43', '新插入2', '999', '2021-07-08 09:22:21', null, null);
INSERT INTO `test` VALUES ('44', '新插入2', '999', '2021-07-08 09:22:26', null, null);
INSERT INTO `test` VALUES ('45', '新插入2', '999', '2021-07-08 11:18:58', null, null);
INSERT INTO `test` VALUES ('46', '新插入2', '999', '2021-07-08 11:19:16', null, null);
INSERT INTO `test` VALUES ('47', '新插入2', '999', '2021-07-08 11:19:31', null, null);
INSERT INTO `test` VALUES ('48', '新插入3', '999', '2021-07-08 11:20:44', null, null);
INSERT INTO `test` VALUES ('49', '新插入4', '999', '2021-07-08 11:20:44', null, null);
INSERT INTO `test` VALUES ('50', '新插入3', '999', '2021-07-08 11:21:13', null, null);

-- ----------------------------
-- Table structure for `testc`
-- ----------------------------
DROP TABLE IF EXISTS `testc`;
CREATE TABLE `testc` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'test表关联表',
  `testId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of testc
-- ----------------------------
INSERT INTO `testc` VALUES ('1', '13');
INSERT INTO `testc` VALUES ('2', '13');
INSERT INTO `testc` VALUES ('3', '13');

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '用户表主键',
  `userName` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'wsl', '123456', null, null);
INSERT INTO `user` VALUES ('2', 'zhangsan', '123456', null, null);

-- ----------------------------
-- Table structure for `userrole`
-- ----------------------------
DROP TABLE IF EXISTS `userrole`;
CREATE TABLE `userrole` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '角色用户表',
  `roleId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of userrole
-- ----------------------------
INSERT INTO `userrole` VALUES ('1', '1', '1');
INSERT INTO `userrole` VALUES ('2', '2', '2');

-- ----------------------------
-- View structure for `departview`
-- ----------------------------
DROP VIEW IF EXISTS `departview`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `departview` AS select `department`.`departmentId` AS `departmentId`,`department`.`departmentName` AS `departmentName`,`department`.`createDate` AS `createDate`,`department`.`createUser` AS `createUser`,`department`.`modifyDate` AS `modifyDate`,`department`.`modifyUser` AS `modifyUser`,`department`.`departmentManager` AS `departmentManager`,`department`.`isdel` AS `isdel`,`user`.`userName` AS `userName` from (`department` join `user` on((`department`.`departmentManager` = `user`.`userId`))) ;

-- ----------------------------
-- View structure for `userview`
-- ----------------------------
DROP VIEW IF EXISTS `userview`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `userview` AS select `user`.`userId` AS `userId`,`user`.`userName` AS `userName`,`user`.`userTel` AS `userTel`,`user`.`departmentId` AS `departmentId`,`user`.`stationId` AS `stationId`,`user`.`userEmail` AS `userEmail`,`user`.`userQQ` AS `userQQ`,`user`.`isdel` AS `isdel`,`user`.`userWX` AS `userWX`,`department`.`departmentName` AS `departmentName`,`station`.`stationName` AS `stationName`,`user`.`graduatSchool` AS `graduatSchool`,`user`.`education` AS `education`,`user`.`interViewWay` AS `interViewWay` from ((`user` join `department` on((`user`.`departmentId` = `department`.`departmentId`))) join `station` on((`user`.`stationId` = `station`.`stationId`))) ;
