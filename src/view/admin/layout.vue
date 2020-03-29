<template>
  <div class="layout">
    <Layout>
      <Sider
        ref="sider"
        class="sider"
        hide-trigger
        collapsible
        :collapsed-width="78"
        v-model="isCollapsed"
        :class="['theme-dark']"
      >
        <Header :style="{padding: isCollapsed ? '0' : ''}" :class="['theme-dark']" class="sider-logo">
          <span>Logo</span> 标题
        </Header>
        <Content>
          <div class="sider-nav">
            <Menu active-name="1" :class="['theme-dark']" width="200">
              <MenuGroup title="MAIN">
                <MenuItem name="1">
                  <Icon type="ios-home" />
                  <span>管理主页</span>
                </MenuItem>
                <MenuItem name="2">
                  <Icon type="ios-log-out" />
                  <span>查看前台</span> 
                </MenuItem>
              </MenuGroup>
              <MenuGroup title="NORMAL">
                <MenuItem name="3">
                  <Icon type="ios-clipboard" />
                  <span>设置公告</span>
                </MenuItem>
                <MenuItem name="4">
                  <Icon type="ios-list" />
                  <span>新闻列表</span>
                </MenuItem>
                <MenuItem name="5">
                  <Icon type="ios-add" />
                  <span>添加新闻</span>
                </MenuItem>
              </MenuGroup>
              <MenuGroup title="PROBLEM">
                <MenuItem name="6">
                  <Icon type="ios-list" />
                  <span>问题列表</span>
                </MenuItem>
                <MenuItem name="7">
                  <Icon type="ios-add" />
                  <span>添加问题</span>
                </MenuItem>
                <MenuItem name="8">
                  <Icon type="ios-cloud-upload" />
                  <span>导入问题</span>
                </MenuItem>
                <MenuItem name="9">
                  <Icon type="ios-cloud-download" />
                  <span>导出问题</span>
                </MenuItem>
                <MenuItem name="10">
                  <Icon type="ios-repeat" />
                  <span>题目重判</span>
                </MenuItem>
              </MenuGroup>
              <MenuGroup title="CONTEST">
                <MenuItem name="11">
                  <Icon type="ios-list" />
                  <span>竞赛列表</span>
                </MenuItem>
                <MenuItem name="12">
                  <Icon type="ios-add" />
                  <span>添加竞赛</span>
                </MenuItem>
              </MenuGroup>
              <MenuGroup title="USER">
                <MenuItem name="13">
                  <Icon type="ios-list" />
                  <span>用户列表</span>
                </MenuItem>
                <MenuItem name="14">
                  <Icon type="ios-contact" />
                  <span>竞赛账号</span>
                </MenuItem>
                <MenuItem name="15">
                  <Icon type="ios-create" />
                  <span>权限管理</span>
                </MenuItem>
              </MenuGroup>
            </Menu>
          </div>
        </Content>
      </Sider>
      <Layout>
        <Header class="header" :style="{posion: 'fixed', width: '100%'}">
          <div class="header-icon">
            <Icon :class="rotateIcon" type="ios-options" v-on:click="toggleCollapse" />
          </div>
          <div class="header-nav"></div>
        </Header>
        <Content class="content">
          <div>内容</div>
        </Content>
        <Footer class="footer">Powered By AloneH | Copyright &copy; 2020 AloneH. All rights reserved</Footer>
      </Layout>
    </Layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCollapsed: false
    };
  },
  computed: {
    rotateIcon() {
      return this.isCollapsed ? "sider-hide" : "";
    }
  },
  methods: {
    toggleCollapse() {
      this.isCollapsed = !this.isCollapsed;
      this.$refs.sider.toggleCollapse();
    }
  }
};
</script>

<style scoped>
.sider {
  height: 100vh;
}
.sider .ivu-layout-header {
  text-align: center;
  max-height: 7vh;
  min-height: 60px;
}
.sider-hide {
  transform: rotate(90deg);
}
.sider-logo {
    background: #1d1e23;
    border-bottom: 1px solid #000;
    color: #f6ca9d;
}
.sider-nav {
    max-height: 93vh;
    overflow-y: scroll;
}
.sider-nav::-webkit-scrollbar {
    display: none;
}
.header {
  background: linear-gradient(90deg, #1d1e23, #3f4045);
  color: #f6ca9d;
  padding: 0;
  box-sizing: inherit;
  max-height: 7vh;
  min-height: 60px;
}
.header-icon {
  margin-left: 1rem;
  margin-right: 1rem;
  font-size: 1.6rem;
}
.header-icon i {
  transition: all 0.3s ease-in-out;
}
.content {
  overflow: auto;
  max-height: 86vh;
}
.footer {
  margin: 0 auto;
  text-align: center;
  max-height: 7vh;
}
</style>