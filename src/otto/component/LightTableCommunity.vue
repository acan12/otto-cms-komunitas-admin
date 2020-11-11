<template>
    <b-card no-body>
        <b-card-header class="border-0">
            <h3 class="mb-0">{{tableTitle}}</h3>
        </b-card-header>

        <el-table class="table-responsive table"
                  header-row-class-name="thead-light"
                  :data="communities">
            

            <el-table-column label="ID"
                             prop="id"
                             min-width="100px">
            </el-table-column>

            <el-table-column label="Nama"
                             prop="name"
                             min-width="140px">
            </el-table-column>

            <el-table-column label="Moderator"
                             prop="moderator"
                             min-width="150px">
            </el-table-column>

            <el-table-column label="Jumlah Anggota"
                             prop="members_count"
                             min-width="200px">
            </el-table-column>

            <el-table-column label="Status"
                             min-width="170px"
                             prop="status">
                
            </el-table-column>

            <el-table-column label="Action"
                             prop="budget"
                             min-width="250px">

                <template v-slot="{row}">
                    <b-button href="javascript:;" variant="outline-primary" @click="communityDetail(row.id)"> Detail</b-button>
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
    name: 'light-table-community',
    components: {
      [Table.name]: Table,
      [TableColumn.name]: TableColumn
    },
    computed: {
        ...mapState('community', ['communities'])
    },
    props: {
        tableTitle: String
    },
    data() {
      return {
        currentPage: 1
      };
    },
    methods:{
        communityDetail: function(){
            this.$router.push({ name: 'community_detail'})
        },
        userRemove: function(){

        }
    },
    created() {
        this.$store.dispatch("community/GET_COMMUNITY")
    }

  }
</script>
