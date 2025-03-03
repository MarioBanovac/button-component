import "./App.css";
import Button from "./components/Button";
import Icon from "./components/Icon";

function App() {
  return (
    <>
      <Button label={"Button CTA"} />
      <Button iconLeft={<Icon />} label={"Button CTA"} />
      <Button iconRight={<Icon />} label={"Button CTA"} />
      <Button icon={<Icon />} iconOnly={true} />
      <Button iconLeft={<Icon />} iconRight={<Icon />} />
      <Button variant="secondary" label={"Button CTA"} />
      <Button variant="secondary" iconLeft={<Icon />} label={"Button CTA"} />
      <Button variant="secondary" iconRight={<Icon />} label={"Button CTA"} />
      <Button variant="secondary" icon={<Icon />} iconOnly={true} />
      <Button variant="secondary" iconLeft={<Icon />} iconRight={<Icon />} />
      <Button variant="tertiary" label={"Button CTA"} />
      <Button variant="tertiary" iconLeft={<Icon />} label={"Button CTA"} />
      <Button variant="tertiary" iconRight={<Icon />} label={"Button CTA"} />
      <Button variant="tertiary" icon={<Icon />} iconOnly={true} />
      <Button variant="tertiary" iconLeft={<Icon />} iconRight={<Icon />} />
    </>
  );
}

export default App;
