<template>
    <b-card no-body>
        <b-card-header class="border-0">
            <h3 class="mb-0">{{tableTitle}}</h3>
        </b-card-header>

        <el-table class="table-responsive table"
                  header-row-class-name="thead-light"
                  :data="categories">
            

            <el-table-column label="Category ID"
                             prop="cat_id"
                             min-width="150px">
            </el-table-column>

            <el-table-column label="Nama"
                             prop="name"
                             min-width="180px">
            </el-table-column>

            <el-table-column label="Deskripsi"
                             prop="description"
                             min-width="200px">
            </el-table-column>


            <el-table-column label="Action"
                             prop="cat_id"
                             min-width="250px">
                <template v-slot="{row}">
                
                    <base-button href="javascript:;" type="default" @click="categoryDetail(row.cat_id)"> Detail</base-button>
                    <base-button href="javascript:;" type="danger" @click="categoryRemove(row.cat_id)"> Delete</base-button>
                </template>
            </el-table-column>
        
        </el-table>

        <b-card-footer class="py-4 d-flex justify-content-end">
            <base-pagination v-model="currentPage" :per-page="10" :total="50"></base-pagination>
        </b-card-footer>
    </b-card>
</template>
<script>
  
  import { Table, TableColumn} from 'element-ui'
  import { mapState } from "vuex"

  export default {
    name: 'light-table-category',
    components: {
      [Table.name]: Table,
      [TableColumn.name]: TableColumn
    },
    computed: {
        ...mapState('category', ['categories'])
    },
    props: {
        tableTitle: String
    },
    data() {
      return {
        currentPage: 1
      };
    },
    methods: {
      categoryDetail: function(){
          this.$router.push({name: "category_detail"})
      },
      categoryRemove: function(){
          
      }
    },
    created() {
        this.$store.dispatch("category/GET_CATEGORIES")
    }
  }
</script>
