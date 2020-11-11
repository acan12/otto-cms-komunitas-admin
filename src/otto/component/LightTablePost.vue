<template>
    <b-card no-body>
        <b-card-header class="border-0">
            <h3 class="mb-0">{{tableTitle}}</h3>
        </b-card-header>

        <el-table class="table-responsive table"
                  header-row-class-name="thead-light"
                  :data="posts">
            
            <el-table-column label="ID"
                             prop="id"
                             min-width="100px">
            </el-table-column>

            <el-table-column label="Komunitas"
                             prop="community_name"
                             min-width="200px">
            </el-table-column>

            <el-table-column label="Title"
                             prop="title"
                             min-width="180px">
            </el-table-column>

            <el-table-column label="Content"
                             prop="content"
                             min-width="200px">
            </el-table-column>

            <el-table-column label="Tipe"
                             prop="type"
                             min-width="200px">
            </el-table-column>

            <el-table-column label="Status"
                             min-width="170px"
                             prop="status">
            
            </el-table-column>

            <el-table-column label="Action"
                             prop="id"
                             min-width="180px">
                <template v-slot="{row}">
                    <b-button href="javascript:;" variant="outline-primary" @click="postDetail(row.id)"> Detail</b-button>
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

  import { mapState } from 'vuex'

  export default {
    name: 'light-table-post',
    components: {
      [Table.name]: Table,
      [TableColumn.name]: TableColumn
    },
    computed: {
        ...mapState('posting', ['posts'])
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
        postDetail: function(){
            this.$router.push({name : "posting_detail" })
        }
    },
    created() {
        this.$store.dispatch("posting/GET_POST")
    }
  }
</script>
