import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';


class Nav extends Component {

  state = {};

  render() {
    let { location } = this.props;
    return (
      <ul className="nav">
        <li className={location.pathname === '/' ? 'active' : null}>
          <Link to="/">
            <i className="pe-7s-home"></i>
            <p>Trang chủ</p>
          </Link>
        </li>
        <li className={this.isPathActive('/antonym') || this.state.antonymMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ antonymMenuOpen: !this.state.antonymMenuOpen })}
            data-toggle="collapse">
            <i className="pe-7s-shuffle"></i>
            <p>
              Từ trái nghĩa
            <b className="caret"></b>
            </p>
          </a>
          <Collapse in={this.state.antonymMenuOpen}>
            <div>
              <ul className="nav">
                <li className={this.isPathActive('/antonym/input-test') ? 'active' : null}>
                  <Link to="/antonym/input-test">Kiểm tra đầu vào</Link>
                </li>
                <li className={this.isPathActive('/antonym/level-1') ? 'active' : null}>
                  <Link to="/antonym/level-1">Mức 1</Link>
                </li>
                <li className={this.isPathActive('/antonym/level-2') ? 'active' : null}>
                  <Link to="/antonym/level-2">Mức 2</Link>
                </li>
                <li className={this.isPathActive('/antonym/level-3') ? 'active' : null}>
                  <Link to="/antonym/level-3">Mức 3</Link>
                </li>
               
              </ul>
            </div>
          </Collapse>
        </li>
        <li className={this.isPathActive('/synonymous') || this.state.synonymousMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ synonymousMenuOpen: !this.state.synonymousMenuOpen })} data-toggle="collapse">
            <i className="pe-7s-refresh-2"></i>
            <p>Từ đồng nghĩa <b className="caret"></b></p>
          </a>
          <Collapse in={this.state.synonymousMenuOpen}>
            <div>
              <ul className="nav">
                <li className={this.isPathActive('/synonymous/input-test') ? 'active' : null}>
                  <Link to="/synonymous/input-test">Kiểm tra đầu vào</Link>
                </li>
                <li className={this.isPathActive('/synonymous/level-1') ? 'active' : null}>
                  <Link to="/synonymous/level-1">Mức 1</Link>
                </li>
                <li className={this.isPathActive('/synonymous/level-2') ? 'active' : null}>
                  <Link to="/synonymous/level-2">Mức 2</Link>
                </li>
                <li className={this.isPathActive('/synonymous/level-3') ? 'active' : null}>
                  <Link to="/synonymous/level-3">Mức 3</Link>
                </li>
               
              </ul>
            </div>
          </Collapse>
        </li>
        <li className={this.isPathActive('/homonym') || this.state.homonymMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ homonymMenuOpen: !this.state.homonymMenuOpen })} data-toggle="collapse">
            <i className="pe-7s-speaker"></i>
            <p>Từ đồng âm<b className="caret"></b></p>
          </a>
          <Collapse in={this.state.homonymMenuOpen}>
            <div>
              <ul className="nav">
                <li className={this.isPathActive('/homonym/input-test') ? 'active' : null}>
                  <Link to="/homonym/input-test">Kiểm tra đầu vào</Link>
                </li>
                <li className={this.isPathActive('/homonym/level-1') ? 'active' : null}>
                  <Link to="/homonym/level-1">Mức 1</Link>
                </li>
                <li className={this.isPathActive('/homonym/level-2') ? 'active' : null}>
                  <Link to="/homonym/level-2">Mức 2</Link>
                </li>
                <li className={this.isPathActive('/homonym/level-3') ? 'active' : null}>
                  <Link to="/homonym/level-3">Mức 3</Link>
                </li>
               
              </ul>
            </div>
          </Collapse>
        </li>
        <li className={this.isPathActive('/the-vocabulary') || this.state.theVocabularyMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ theVocabularyMenuOpen: !this.state.theVocabularyMenuOpen })} data-toggle="collapse">
            <i className="pe-7s-note2"></i>
            <p>Trường từ vựng <b className="caret"></b></p>
          </a>
          <Collapse in={this.state.theVocabularyMenuOpen}>
            <div>
              <ul className="nav">
                <li className={this.isPathActive('/the-vocabulary/input-test') ? 'active' : null}>
                  <Link to="/the-vocabulary/input-test">Kiểm tra đầu vào</Link>
                </li>
                <li className={this.isPathActive('/the-vocabulary/level-1') ? 'active' : null}>
                  <Link to="/the-vocabulary/level-1">Mức 1</Link>
                </li>
                <li className={this.isPathActive('/the-vocabulary/level-2') ? 'active' : null}>
                  <Link to="/the-vocabulary/level-2">Mức 2</Link>
                </li>
                <li className={this.isPathActive('/the-vocabulary/level-3') ? 'active' : null}>
                  <Link to="/the-vocabulary/level-3">Mức 3</Link>
                </li>
               
              </ul>
            </div>
          </Collapse>
        </li>
        <li className={this.isPathActive('/study') || this.state.studyMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ studyMenuOpen: !this.state.studyMenuOpen })} data-toggle="collapse">
            <i className="pe-7s-study"></i>
            <p>Tự học<b className="caret"></b></p>
          </a>
          <Collapse in={this.state.studyMenuOpen}>
            <div>
              <ul className="nav">
                <li className={this.isPathActive('/study/videos') ? 'active' : null}>
                  <Link to="/study/videos">Video</Link>
                </li>
                <li className={this.isPathActive('/study/games') ? 'active' : null}>
                  <Link to="/study/games">Trò chơi</Link>
                </li>
                <li className={this.isPathActive('/study/productions') ? 'active' : null}>
                  <Link to="/study/productions">Sản phẩm</Link>
                </li>
              </ul>
            </div>
          </Collapse>
        </li>
        <li className={this.isPathActive('/introduce') ? 'active' : null}>
          <Link to="/introduce">
            <i className="pe-7s-credit"></i>
            <p>Giới thiệu</p>
          </Link>
        </li>
      </ul>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }
}

export default withRouter(Nav);