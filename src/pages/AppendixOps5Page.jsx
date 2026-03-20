import { Link } from "react-router-dom";
import "../components/DocContent.css";

export default function AppendixOps5Page() {
  return (
    <article className="doc-content">
      <h1>OPS 5. 결함을 어떻게 줄이고 교정을 용이하게 하며 프로덕션 흐름을 개선합니까?</h1>

      <p>
        안전하고 신뢰할 수 있는 배포를 통해 프로덕션으로의 변경 흐름을 개선합니다.
        버전 관리, 테스트, 구성 관리, 빌드 및 배포 자동화, 패치 관리, 설계 표준 공유,
        코드 품질 관행, 다중 환경, 소규모 빈번한 변경, 완전한 CI/CD 자동화를 통해
        결함을 조기에 발견하고 수정합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li><Link to="/appendix/operational-excellence/ops5/bp01">OPS05-BP01 — 버전 관리 사용</Link></li>
        <li><Link to="/appendix/operational-excellence/ops5/bp02">OPS05-BP02 — 변경 사항 테스트 및 검증</Link></li>
        <li><Link to="/appendix/operational-excellence/ops5/bp03">OPS05-BP03 — 구성 관리 시스템 사용</Link></li>
        <li><Link to="/appendix/operational-excellence/ops5/bp04">OPS05-BP04 — 빌드 및 배포 관리 시스템 사용</Link></li>
        <li><Link to="/appendix/operational-excellence/ops5/bp05">OPS05-BP05 — 패치 관리 수행</Link></li>
        <li><Link to="/appendix/operational-excellence/ops5/bp06">OPS05-BP06 — 설계 표준 공유</Link></li>
        <li><Link to="/appendix/operational-excellence/ops5/bp07">OPS05-BP07 — 코드 품질 향상을 위한 관행 구현</Link></li>
        <li><Link to="/appendix/operational-excellence/ops5/bp08">OPS05-BP08 — 여러 환경 사용</Link></li>
        <li><Link to="/appendix/operational-excellence/ops5/bp09">OPS05-BP09 — 빈번하고 소규모의 되돌릴 수 있는 변경 수행</Link></li>
        <li><Link to="/appendix/operational-excellence/ops5/bp10">OPS05-BP10 — 통합 및 배포 완전 자동화</Link></li>
      </ul>
    </article>
  );
}
