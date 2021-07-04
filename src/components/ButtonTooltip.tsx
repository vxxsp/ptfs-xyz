import { OverlayTrigger, Tooltip, Button } from 'react-bootstrap';

const ButtonTooltip = ({
  onClick,
  className,
  text,
  tooltip,
  nodelay,
}: {
  onClick: () => void;
  className?: string;
  text: string;
  tooltip: string;
  nodelay?: boolean;
}) => (
  <OverlayTrigger
    placement="top"
    delay={{ show: nodelay ? 0 : 500, hide: 0 }}
    overlay={<Tooltip id={tooltip}>{tooltip}</Tooltip>}
  >
    <Button onClick={onClick} className={className}>
      {text}
    </Button>
  </OverlayTrigger>
);

export { ButtonTooltip };
