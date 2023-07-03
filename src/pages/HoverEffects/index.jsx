import './hover-effects.css'

export default function HoverEffects() {
  return (
    <div id="hover-effects">
      <h1 className="heading">Hover Images</h1>
      <ul>
        <li>Zoom out #1</li>
        <div id="style_1">
          <div>
            <figure>
              <img src="https://images.unsplash.com/photo-1462524653740-777d166c975e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1245&q=80" />
            </figure>
          </div>
          <div>
            <figure>
              <img src="https://images.unsplash.com/photo-1526894810071-f537a4af29fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80" />
            </figure>
          </div>
        </div>
        <li>Zoom in #2</li>
        <div id="style_2">
          <div>
            <figure>
              <img src="https://images.unsplash.com/photo-1440610049442-a5101a2204ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=420&q=80" />
            </figure>
          </div>
          <div>
            <figure>
              <img src="https://images.unsplash.com/photo-1448518184296-a22facb4446f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
            </figure>
          </div>
        </div>
        <li>Rotate #3</li>
        <div id="style_3">
          <div>
            <figure>
              <img src="https://images.unsplash.com/photo-1433190152045-5a94184895da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" />
            </figure>
          </div>
          <div>
            <figure>
              <img src="https://images.unsplash.com/photo-1452215199360-c16ba37005fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80" />
            </figure>
          </div>
        </div>
        <li>Slide #4</li>
        <div id="style_4">
          <div>
            <figure>
              <img src="https://images.unsplash.com/photo-1460378150801-e2c95cb65a50?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80" />
            </figure>
          </div>
          <div>
            <figure>
              <img src="https://images.unsplash.com/photo-1621358921262-f4c003bc4123?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
            </figure>
          </div>
        </div>
        <li>Opacity #5</li>
        <div id="style_5">
          <div>
            <figure>
              <img src="https://images.unsplash.com/photo-1615963079370-f9a225201959?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
            </figure>
          </div>
          <div>
            <figure>
              <img src="https://images.unsplash.com/photo-1621173865296-baaf7dc3afcc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
            </figure>
          </div>
        </div>
        <li>Hover caption #6</li>
        <div className="style_content">
          <a href="#" className="column" id="caption">
            <span className="text">
              <h1>Hover Effect</h1>
            </span>
            <img src="https://images.unsplash.com/photo-1575405070791-081b3a960ce8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
          </a>
          <a href="#" className="column" id="caption">
            <span className="text">
              <h1>Like it </h1>
            </span>
            <img src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80" />
          </a>
        </div>
        <li>Text fadeIn bottom #7</li>
        <div>
          <div className="style_content">
            <div className="content">
              <div className="content-overlay"></div>
              <img
                className="content-image"
                src="https://images.unsplash.com/photo-1564758757725-602ad0234578?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              />
              <div className="content-details fadeIn-bottom">
                <h3 className="content-title">This is a title</h3>
                <p className="content-text">This is a short description</p>
              </div>
            </div>
            <div className="content">
              <div className="content-overlay"></div>
              <img
                className="content-image"
                src="https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362"
              />
              <div className="content-details fadeIn-bottom">
                <h3 className="content-title">This is a title</h3>
                <p className="content-text">This is a short description</p>
              </div>
            </div>
          </div>
          <li>Text fadeIn top #8</li>
          <div>
            <div className="style_content">
              <div className="content">
                <div className="content-overlay"></div>
                <img
                  className="content-image"
                  src="https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362"
                />
                <div className="content-details fadeIn-top">
                  <h3>This is a title</h3>
                  <p>This is a short description</p>
                </div>
              </div>
              <div className="content">
                <div className="content-overlay"></div>
                <img
                  className="content-image"
                  src="https://images.unsplash.com/photo-1565772838671-a7f54969fcab?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTZ8ODYyNTEzfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                />
                <div className="content-details fadeIn-top">
                  <h3>This is a title</h3>
                  <p>This is a short description</p>
                </div>
              </div>
            </div>
            <li>Text fadeIn left #9</li>
            <div>
              <div className="style_content">
                <div className="content">
                  <div className="content-overlay"></div>
                  <img
                    className="content-image"
                    src="https://images.unsplash.com/photo-1580491531063-fefcb810a969?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHw4NjI1MTN8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  />
                  <div className="content-details fadeIn-left">
                    <h3>This is a title</h3>
                    <p>This is a short description</p>
                  </div>
                </div>
                <div className="content">
                  <div className="content-overlay"></div>
                  <img
                    className="content-image"
                    src="https://images.unsplash.com/photo-1580329081767-8c6e81c15226?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTB8ODYyNTEzfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  />
                  <div className="content-details fadeIn-left">
                    <h3>This is a title</h3>
                    <p>This is a short description</p>
                  </div>
                </div>
              </div>
              <li>Text fadeIn right #9</li>
              <div>
                <div className="style_content">
                  <div className="content">
                    <div className="content-overlay"></div>
                    <img
                      className="content-image"
                      src="https://images.unsplash.com/photo-1485356824219-4bc17c2a2ea7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80"
                    />
                    <div className="content-details fadeIn-right">
                      <h3>This is a title</h3>
                      <p>This is a short description</p>
                    </div>
                  </div>
                  <div>
                    <div className="content">
                      <div className="content-overlay"></div>
                      <img
                        className="content-image"
                        src="https://images.unsplash.com/photo-1579165112473-fdec4a10a71b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w4NjI1MTN8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                      />
                      <div className="content-details fadeIn-right">
                        <h3>This is a title</h3>
                        <p>This is a short description</p>
                      </div>
                    </div>
                  </div>
                </div>
                <li>Text fadeIn top left #10</li>
                <div className="style_content">
                  <div className="content">
                    <div className="content-overlay"></div>
                    <img
                      className="content-image"
                      src="https://images.unsplash.com/photo-1585249564621-5b428ed53d98?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    />
                    <div className="content-details fadeIn-top fadeIn-left">
                      <h3>This is a title</h3>
                      <p>This is a short description</p>
                    </div>
                  </div>
                  <div className="content">
                    <div className="content-overlay"></div>
                    <img
                      className="content-image"
                      src="https://images.unsplash.com/photo-1523554888454-84137e72c3ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                    />
                    <div className="content-details fadeIn-top fadeIn-left">
                      <h3>This is a title</h3>
                      <p>This is a short description</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ul>
    </div>
  )
}
