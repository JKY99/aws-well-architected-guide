import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel1Page() {
  return (
    <article className="doc-content">
      <h1>REL 1 — 서비스 할당량 및 제약 사항을 어떻게 관리합니까?</h1>

      <p>
        클라우드 기반 워크로드 아키텍처에는 서비스 할당량(서비스 한도라고도 함)이 존재합니다.
        이러한 할당량은 필요 이상의 리소스를 실수로 프로비저닝하는 것을 방지하고,
        서비스 남용으로부터 보호하기 위해 API 작업에 대한 요청 속도를 제한합니다.
        또한 네트워크 대역폭, 디스크 용량 등 변경 불가능한 리소스 제약 사항도 존재합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/reliability/rel1/bp01">REL01-BP01: 서비스 할당량 및 제약 사항 파악</Link></strong><br />
          <span>기본 할당량을 파악하고 워크로드 아키텍처에 대한 할당량 증가 요청을 관리합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel1/bp02">REL01-BP02: 계정 및 리전 간 서비스 할당량 관리</Link></strong><br />
          <span>프로덕션 워크로드가 실행되는 모든 계정과 리전에서 서비스 할당량을 일관되게 관리합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel1/bp03">REL01-BP03: 아키텍처를 통해 고정 서비스 할당량 및 제약 사항 수용</Link></strong><br />
          <span>변경 불가능한 서비스 할당량과 제약 사항을 파악하고, 이러한 한도가 안정성에 영향을 미치지 않도록 아키텍처를 설계합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel1/bp04">REL01-BP04: 할당량 모니터링 및 관리</Link></strong><br />
          <span>능동적이고 자동화된 시스템을 배포하여 할당량 사용 임계값을 관리 및 모니터링합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel1/bp05">REL01-BP05: 할당량 관리 자동화</Link></strong><br />
          <span>한도에 근접할 때 경고를 보내고 적절한 경우 할당량 증가 요청을 자동화하는 도구를 구현합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel1/bp06">REL01-BP06: 장애 조치 수용을 위해 현재 할당량과 최대 사용량 사이에 충분한 간격 확보</Link></strong><br />
          <span>장애 조치 시나리오를 처리하기 위해 서비스 할당량과 실제 사용량 사이에 충분한 여유 공간을 유지합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
