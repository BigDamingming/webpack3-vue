<template>
    <div class="layout">
        <div :class="{ 'layout-side': true, 'layout-side-offset-hidden': has.fullScreen }">
            <div class="layout-logo" @click="$router.push('/')">
                {{ state.logo }}
            </div>
            <div class="layout-user">
                <div class="img-wrapper">
                    <img :src="state.user.pic" />
                </div>
                <div class="introduce-wrapper">
                    <p class="name">{{ state.user.name }}</p>
                    <p class="post">{{ state.user.post }}</p>
                </div>
            </div>
            <div class="layout-menu">
                <Menu theme="dark" @on-select="route => $router.push(route)">
                    <Submenu v-for="(sub, key) in state.menu" :key="key" :name="key">
                        <template slot="title">
                            <Icon type="ios-paper"></Icon>{{ sub.title }}
                        </template>
                        <MenuItem v-for="(menu, key) in sub.child" :key="key" :name="'/framework' + menu.route">
                            {{ menu.title }}
                        </MenuItem>
                    </Submenu>
                </Menu>
            </div>
        </div>
        <div :class="{ 'layout-main': true, 'layout-main-offset-origin': has.fullScreen }">
            <div class="layout-header">
                <div class="side-icon-wrapper" @click="has.fullScreen = !has.fullScreen">
                    <Icon :type="`arrow-return-${has.fullScreen ? 'right' : 'left'}`" size="32"></Icon>
                </div>
                <div class="user-wrapper">
                    <ul>
                        <li>
                            <div class="name">{{ state.user.name }}</div>
                        </li>
                        <li>
                            <div class="img-wrapper">
                                <img :src="state.user.pic" />
                            </div>
                        </li>
                        <li>
                            <div class="icon-wrapper">
                                <Icon type="ios-gear" size="18"></Icon>
                            </div>
                        </li>
                        <li>
                            <div class="icon-wrapper">
                                <Icon type="aperture" size="18"></Icon>
                            </div>
                        </li>
                        <li>
                            <div class="icon-wrapper">
                                <Icon type="battery-low" size="18"></Icon>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="layout-content">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                has: {
                    fullScreen: false,
                },
                state: {
                    logo: 'Vue',
                    user: {
                        pic: 'http://dwz.cn/6LCQPh',
                        name: '小虎牙',
                        post: 'front end',
                    },
                    menu: [{
                        title: '阿里',
                        child: [
                            {
                                title: '淘宝',
                                route: '/taobao',
                            },
                            {
                                title: '天猫',
                                route: '/tmall',
                            }
                        ]
                    }, {
                        title: '网易',
                        child: [
                            {
                                title: '考拉海购',
                                route: '/kaola',
                            },
                            {
                                title: '网易新闻',
                                route: '/news',
                            }
                        ]
                    }]
                },
            };
        },
    };
</script>

<style lang="less">
    @color-focus-menu: #222630 !important;
    @color-theme: #1b1e26 !important;
    @width-side: 200px !important;
    @transition-side: all .4s ease-in-out !important;


    .ivu-menu-dark {
        width: @width-side;
        background-color: @color-theme;
    }

    .ivu-menu-dark.ivu-menu-vertical {
        .ivu-menu-submenu {
            .ivu-menu-item-active,
            .ivu-menu-item-active:hover,
            .ivu-menu-submenu-title:hover {
                background-color: @color-focus-menu;
            }
        }
        .ivu-menu-opened {
            background-color: @color-theme;
            .ivu-menu-submenu-title,
            .ivu-menu-item:hover {
                background-color: @color-focus-menu;
            }
        }
    }


    .layout {
        height: 100%;
        &:after {
            content: "";
            display: table;
            clear: both;
        }
    }


    .layout-side {
        float: left;
        width: @width-side;
        height: 100%;
        background-color: @color-theme;
        transition: @transition-side;
        .layout-logo {
            height: 52px;
            color: #bbb;
            font-size: 20px;
            font-weight: bolder;
            text-indent: 12px;
            line-height: 52px;
            letter-spacing: .5px;
            background-color: #222630;
        }
        .layout-user {
            padding: 17px 0;
            background-color: @color-theme;
            &:after {
                content: "";
                display: table;
                clear: both;
            }
            .img-wrapper {
                float: left;
                margin-left: 24px;
                img {
                    display: block;
                    width: 54px;
                    height: 54px;
                    border-radius: 50%;
                }
            }
            .introduce-wrapper {
                float: left;
                padding: 8px 0 0;
                margin-left: 10px;
                font-weight: bolder;
                letter-spacing: 1px;
                .name {
                    color: #bbb;
                    font-size: 14px;
                }
                .post {
                    color: #bbb;
                    font-size: 12px;
                }
            }
        }
    }

    .layout-side-offset-hidden {
        margin-left: -200px;
    }

    
    .layout-main {
        height: 100%;
        margin-left: 200px;
        background-color: #e5e9ec;
        transition: @transition-side;
        .layout-header {
            height: 52px;
            padding: 0 16px;
            line-height: 52px;
            background-color: #fff;
            .side-icon-wrapper {
                float: left;
                margin: 8px 0 0 0;
                cursor: pointer;
            }
            .user-wrapper {
                float: right;
                ul {
                    &:after {
                        content: "";
                        display: table;
                        clear: both;
                    }
                    li {
                        float: left;
                        margin-left: 5px;
                        .name {
                            color: #000;
                            letter-spacing: 1px;
                        }
                        .img-wrapper {
                            position: relative;
                            top: 13px;
                            img {
                                display: block;
                                width: 25px;
                                height: 25px;
                                border-radius: 50px;
                            }
                        }
                        .icon-wrapper {
                            margin-left: 12px;
                            .ivu-icon {
                                position: relative;
                                top: 3px;
                            }
                        }
                    }
                }
            }
        }
        .layout-content {
            position: relative;
            padding: 16px;
        }
    }

    .layout-main-offset-origin {
        margin-left: 0;
    }
</style>