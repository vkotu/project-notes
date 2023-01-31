// import Editing from '';
import { lazy, Suspense } from 'react';
import { simulateNetwork } from '../lib/sleep';
import Loading from './loading';

const Editing = lazy(() => simulateNetwork(import('./edit')));

const NoteContent = ({ note, setNotes, isEditing }) => {
  if (isEditing) {
    return (
      <Suspense fallback={<Loading />}>
        <Editing note={note} setNotes={setNotes} />;
      </Suspense>
    );
  }
  return (
    <div className="flex h-full flex-col gap-4 overflow-y-scroll p-4">
      <h2>{note.title}</h2>
      <p>{note.content}</p>
    </div>
  );
};

export default NoteContent;
