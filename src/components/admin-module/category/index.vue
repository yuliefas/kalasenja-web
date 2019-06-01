<template>
  <div class="content">
    <div class="row justify-content-md-center">
      <div class="col-sm-8">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Ingredient</th>
              <th scope="col">Measurement</th>
              <th scope="col">cm</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Klambi Lebaran</th>
              <td>ok</td>
              <td>100% Cotton</td>
              <td>@20 centimeter</td>
              <td>12</td>
              <td>
                <a href="edit.html" class="btn btn-secondary">edit</a>
                <button class="btn btn-danger">delete</button>
              </td>
            </tr>
            <tr>
              <th scope="row">Klambi Lebaran</th>
              <td>ok</td>
              <td>100% Cotton</td>
              <td>@20 centimeter</td>
              <td>12</td>
              <td>
                <a href="edit.html" class="btn btn-secondary">edit</a>
                <button class="btn btn-danger">delete</button>
              </td>
            </tr>
          </tbody>
        </table>

        <!-- start: Pagination-->
        <nav class="float-right">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">1</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">2</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">3</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
        <!-- end:/ Pagination-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>