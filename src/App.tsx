import React from 'react';
import Button, { ButtonSize, ButtonType } from './components/Button/button'

function App() {
  return (
    <div className="App">
      <div>
        <h1>Button</h1>
        <div>
          <h2>Default Button</h2>
          <Button btnType={ButtonType.Default} autoFocus>Default Button</Button>
          <Button btnType={ButtonType.Default} disabled> disabled Default Button</Button>
          <Button btnType={ButtonType.Default} size={ButtonSize.Large}> Large Default Button</Button>
          <Button btnType={ButtonType.Default} size={ButtonSize.Large} disabled> Large disabled Default Button</Button>
          <Button btnType={ButtonType.Default} size={ButtonSize.Small}> Small Default Button</Button>
          <Button btnType={ButtonType.Default} size={ButtonSize.Small} disabled> Small disabled Default Button</Button>
        </div>
        <div>
          <h2>Primary Button</h2>
          <Button btnType={ButtonType.Primary}>Primary Button</Button>
          <Button btnType={ButtonType.Primary} disabled> disabled Primary Button</Button>
          <Button btnType={ButtonType.Primary} size={ButtonSize.Large}> Large Primary Button</Button>
          <Button btnType={ButtonType.Primary} size={ButtonSize.Large} disabled> Large disabled Primary Button</Button>
          <Button btnType={ButtonType.Primary} size={ButtonSize.Small}> Small Primary Button</Button>
          <Button btnType={ButtonType.Primary} size={ButtonSize.Small} disabled> Small disabled Primary Button</Button>
        </div>
        <div>
          <h2>Danger Button</h2>
          <Button btnType={ButtonType.Danger}>Danger Button</Button>
          <Button btnType={ButtonType.Danger} disabled> disabled Danger Button</Button>
          <Button btnType={ButtonType.Danger} size={ButtonSize.Large}> Large Danger Button</Button>
          <Button btnType={ButtonType.Danger} size={ButtonSize.Large} disabled> Large disabled Danger Button</Button>
          <Button btnType={ButtonType.Danger} size={ButtonSize.Small}> Small Danger Button</Button>
          <Button btnType={ButtonType.Danger} size={ButtonSize.Small} disabled> Small disabled Danger Button</Button>
        </div>
        <div>
          <h2>Dashed Button</h2>
          <Button btnType={ButtonType.Dashed}>Dashed Button</Button>
          <Button btnType={ButtonType.Dashed} disabled> disabled Dashed Button</Button>
          <Button btnType={ButtonType.Dashed} size={ButtonSize.Large}> Large Dashed Button</Button>
          <Button btnType={ButtonType.Dashed} size={ButtonSize.Large} disabled> Large disabled Dashed Button</Button>
          <Button btnType={ButtonType.Dashed} size={ButtonSize.Small}> Small Dashed Button</Button>
          <Button btnType={ButtonType.Dashed} size={ButtonSize.Small} disabled> Small disabled Dashed Button</Button>
        </div>
        <div>
          <h2>Link Button</h2>
          <Button btnType={ButtonType.Link} href='http://www.baidu.com'>Link Button</Button>
          <Button btnType={ButtonType.Link} disabled href='http://www.baidu.com'> disabled Link Button</Button>
          <Button btnType={ButtonType.Link} size={ButtonSize.Large} href='http://www.baidu.com'> Large Link Button</Button>
          <Button btnType={ButtonType.Link} size={ButtonSize.Large} disabled href='http://www.baidu.com'> Large disabled Link Button</Button>
          <Button btnType={ButtonType.Link} size={ButtonSize.Small} href='http://www.baidu.com'> Small Link Button</Button>
          <Button btnType={ButtonType.Link} size={ButtonSize.Small} disabled href='http://www.baidu.com'> Small disabled Link Button</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
