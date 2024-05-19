type Props = {
  className: string;
  name: string;
};

const Icon = ({ className, name }: Props) => {
  return (
    <svg className={`${className}`}>
      <use xlinkHref={`/icons/sprite.svg#${name}`} />
    </svg>
  );
};

export default Icon;
