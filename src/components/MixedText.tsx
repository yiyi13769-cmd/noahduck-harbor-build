import type { ReactNode } from 'react';

type MixedTextProps = {
  text: string;
};

const latinTokenPattern = /([A-Za-z][A-Za-z0-9+#./-]*)/g;
const cjkPattern = /[\u3400-\u9fff]/;

export function MixedText({ text }: MixedTextProps) {
  if (!cjkPattern.test(text)) {
    return <>{text}</>;
  }

  const parts = text.split(latinTokenPattern).filter(Boolean);

  return (
    <>
      {parts.map((part, index): ReactNode =>
        /^[A-Za-z][A-Za-z0-9+#./-]*$/.test(part) ? (
          <span className="latin-inline" key={`${part}-${index}`}>
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </>
  );
}
