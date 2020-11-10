<template>
    <b-card no-body>
        <b-card-header class="border-0">
            <h3 class="mb-0">{{tableTitle}}</h3>
        </b-card-header>

        <el-table class="table-responsive table"
                  header-row-class-name="thead-light"
                  :data="projects">
            

            <el-table-column label="Category ID"
                             prop="budget"
                             min-width="200px">
            </el-table-column>

            <el-table-column label="Nama"
                             prop="budget"
                             min-width="140px">
            </el-table-column>

            <el-table-column label="Deskripsi"
                             prop="budget"
                             min-width="140px">
            </el-table-column>


            <el-table-column label="Action"
                             prop="budget"
                             min-width="250px">

                
                <base-button href="javascript:;" type="default" @click="categoryDetail()"> Detail</base-button>
                <base-button href="javascript:;" type="danger" @click="categoryRemove()"> Delete</base-button>
            </el-table-column>
        
        </el-table>

        <b-card-footer class="py-4 d-flex justify-content-end">
            <base-pagination v-model="currentPage" :per-page="10" :total="50"></base-pagination>
        </b-card-footer>
    </b-card>
</template>
<script>
  import projects from '../../views/Tables/projects'
  import { Table, TableColumn} from 'element-ui'
  export default {
    name: 'light-table-category',
    components: {
      [Table.name]: Table,
      [TableColumn.name]: TableColumn
    },
    props: {
        tableTitle: String
    },
    data() {
      return {
        projects,
        currentPage: 1
      };
    },
    methods: {
      categoryDetail: function(){
          this.$router.push({name: "category_detail"})
      },
      categoryRemove: function(){
          
      }
    }
  }
</script>
