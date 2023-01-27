import { useState, ChangeEvent, FormEvent } from "react";
import Styles from "../styles/NewFeedForm.module.css";

type Props = {
  onSubmit: (newFeed: string) => void;
};

export function NewFeedForm({ onSubmit }: Props) {
  const [newFeed, setNewFeed] = useState("");

  function onInputChange(e: ChangeEvent<HTMLInputElement>) {
    setNewFeed(e.target.value);
  }

  function onFormSubmit(e: FormEvent) {
    e.preventDefault();
    newFeed && onSubmit(newFeed);
  }

  return (
    <form className={Styles.form} onSubmit={onFormSubmit}>
      <input
        placeholder="https://strdr4605.com/feed/rss.xml,http://example.com/atom.xml"
        type="text"
        value={newFeed}
        onChange={onInputChange}
      />
      <button type="submit">Add feeds</button>
    </form>
  );
}
