<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success" />
    <b-container fluid class="mt--9">
      <b-row>
        <b-col>
          <b-card
            title="Search Komunitas"
            img-alt="Image"
            tag="article"
            style="max-width: 100rem;"
            class="mb-2">

				<b-form id="navbar-search-main" class="navbar-search form-inline mr-sm-3 navbar-search-light">
					<b-form-group class="mb-4">
						<b-input-group class="input-group-alternative input-group-merge">
							<b-form-input placeholder="Search Komunitas" type="text"> </b-form-input>

							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-search"></i></span>
							</div>
						</b-input-group>
					</b-form-group>
				</b-form>

        <b-button class="m-md-2" href="javascript:;" variant="default" @click="doAddCommunity()">+ Komunitas</b-button>
				<b-button ml-22 style="float: right" href="javascript:;" variant="primary">Search</b-button>

          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <light-table-community :table-title="title"/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
  import { Dropdown, DropdownItem, DropdownMenu, Table, TableColumn } from 'element-ui';
  import LightTableCommunity from "../../component/LightTableCommunity";
  

  export default {
    components: {
      LightTableCommunity,
      [Dropdown.name]: Dropdown,
      [DropdownItem.name]: DropdownItem,
      [DropdownMenu.name]: DropdownMenu,
      [Table.name]: Table,
      [TableColumn.name]: TableColumn
    },
    data() {
      return {
        title: "Community Data"
      };
    },
    methods: {
      doAddCommunity(){
          this.$router.push({name: "community_add"})
      }
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
