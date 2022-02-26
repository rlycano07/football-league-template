import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      {/* <div>
        <img class="navbar-logo" src='logo192.png'/>
      </div> */}
      <img class="img-fluid table-image" alt="Responsive image" src='logo192.png'/>
      <div class="table-responsive">
        <div class="table-heading-content">
          <h2 class="table-heading">Standings</h2>
        </div>
        <table class="table table-hover table-striped table-bordered">
        <thead class="table-head">
            <tr>
              <th>#</th>
              <th class="flexible">Club</th>
              <th>MP</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
              <th>GF</th>
              <th>GA</th>
              <th>GD</th>
              <th>Pts</th>
            </tr>
        </thead>
        <tbody class="tbody-contents">
            <tr>
                <th scope="row">1</th>
                <td class="flexible">Penshurst United</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td class="flexible">FC Rockdale</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
            </tr>
        </tbody>
        </table>
      </div>
      
      <div class="table-responsive">
        <div class="table-heading-content">
          <h2 class="table-heading">Squad</h2>
        </div>
        <div class="squad-table">
          <div class="squad-table-head">
            <div class="squad-table-head-content">
              Penshurst United
            </div>
            <div class="squad-table-head-content">
              FC Rockdale
            </div>
          </div>
          <div class="squad-table-body">
            <div class="lineups">
                <p>Ram</p>
                <p>Shyam</p>
                <p>Laxman</p>
                <p>Hari</p>
                <p>Dron</p>
            </div>
            <div class="lineups">
                <p>Kartik</p>
                <p>Bhism</p>
                <p>Kans</p>
                <p>Nakul</p>
                <p>Sahadev</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="table-responsive">
        <div class="table-heading-content">
          <h2 class="table-heading">Goals</h2>
        </div>
        <table class="table table-hover table-striped table-bordered">
        <thead class="table-head">
            <tr>
              <th>#</th>
              <th class="flexible">Name</th>
              <th>MP</th>
              <th>G</th>
            </tr>
        </thead>
        <tbody class="tbody-contents">
            <tr>
                <th scope="row">1</th>
                <td class="flexible">-</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td class="flexible">-</td>
                <td>-</td>
                <td>-</td>
            </tr>
        </tbody>
        </table>
      </div>
      <div class="table-responsive">
        <div class="table-heading-content">
          <h2 class="table-heading">Assists</h2>
        </div>
        <table class="table table-hover table-striped table-bordered">
        <thead class="table-head">
            <tr>
              <th>#</th>
              <th class="flexible">Name</th>
              <th>MP</th>
              <th>A</th>
            </tr>
        </thead>
        <tbody class="tbody-contents">
            <tr>
                <th scope="row">1</th>
                <td class="flexible">-</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td class="flexible">-</td>
                <td>-</td>
                <td>-</td>
            </tr>
        </tbody>
        </table>
      </div> */}
    </div>
  );
}

export default App;