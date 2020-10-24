<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success" />

    <b-container fluid class="mt--9">

    
      <b-row>
        <b-col>
          <b-card
            
            img-alt="Image"
            tag="article"
            style="max-width: 100rem;"
            class="mb-2">


              <div>
                <b-tabs pills>
                  <b-tab active>
                    <template v-slot:title>
                      <i class="ni ni-cloud-upload-96 mr-2"></i> Role Users
                    </template>
                    <br/>
                    <b-form id="navbar-search-main" class="navbar-search form-inline mr-sm-3 navbar-search-light">
                      
                      <b-form-group class="mb-10">
                        <b-input-group class="input-group-alternative input-group-merge">
                          <b-form-input placeholder="Search User" type="text"> </b-form-input>

                          <div class="input-group-append">
                            <span class="input-group-text"><i class="fas fa-search"></i></span>
                          </div>
                        </b-input-group>
                      </b-form-group>

                    </b-form>
                    <b-button ml-22 style="float: right" href="javascript:;" variant="primary">Search</b-button>
                    <b-dropdown id="dropdown-1" text="User Type" class="m-md-2" variant="info" @change="selectUserType($event)" v-model="key">
                      <b-dropdown-item>Normal User</b-dropdown-item>
                      <b-dropdown-item>Verified User</b-dropdown-item>
                    </b-dropdown>

                    <light-table-user :table-title="title"/>
                  </b-tab>

                  <b-tab>
                    <template v-slot:title>
                      <i class="ni ni-bell-55 mr-2"></i> Role Resources
                    </template>
                    <p class="p-3">Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
                  </b-tab>
                </b-tabs>
              </div>            

          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
  import { Dropdown, DropdownItem, DropdownMenu, Table, TableColumn } from 'element-ui';
  import projects from '../../../views/Tables/projects'
  import users from '../../../views/Tables/users'
  import LightTableUser from "../../component/LightTableUserManagement";


  export default {
    components: {
      LightTableUser,
      [Dropdown.name]: Dropdown,
      [DropdownItem.name]: DropdownItem,
      [DropdownMenu.name]: DropdownMenu,
      [Table.name]: Table,
      [TableColumn.name]: TableColumn
    },
    methods: {
      selectUserType(e){
          alert("click select user type!")
      }
    },
    data() {
      return {
        projects,
        users,
        title: "User Role Management",
        key: ""
      };
    }
  };
</script>
<style>
.el-table.table-dark{
  background-color: #172b4d;
  color: #f8f9fe;
}

.el-table.table-dark th,
.el-table.table-dark tr{
  background-color: #172b4d;
}

.el-table.table-dark td,
.el-table.table-dark th.is-leaf{
  border-bottom: none;
}
</style>
