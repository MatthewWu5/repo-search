<template>
  <div>
    <!-- table, table-row, table-cell -->
    <!-- table-cell 垂直居中对齐，关联伸缩等 -->
    <table>
      <thead>
        <tr>
          <th>
            head1
          </th>
          <th>
            head2
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            11
          </td>
          <td>
            22
          </td>
        </tr>
      </tbody>
    </table>
    <div class="container">
      <div class="row">
        <div class="cell">
          cell1
        </div>
        <div class="cell">
          cell2
        </div>
        <div class="cell">
          cell3
        </div>
      </div>
      <div class="row">
        <div class="cell max-width">
          cell111111111111111111111111111111111111
        </div>
        <div class="cell margin">
          cell2
        </div>
        <div class="cell padding">
          cell3
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.container {
  display: table;
}

.row {
  display: table-row;
}

.cell {
  display: table-cell;
}

.max-width {
  /* max-width: 100px; */
  /* overflow: hidden; */
}

.margin {
  /* margin: 16px; */
}

.padding {
  /* padding: 16px; */
}
</style>
