import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel12Page() {
  return (
    <article className="doc-content">
      <h1>REL 12 — 안정성을 어떻게 테스트합니까?</h1>

      <p>
        워크로드의 안정성을 검증하고 지속적으로 개선하기 위해 플레이북, 게임 데이,
        카오스 엔지니어링 등 다양한 테스트 방법을 활용합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/reliability/rel12/bp01">REL12-BP01: 플레이북을 사용하여 장애 조사</Link></strong><br />
          <span>장애 발생 시 체계적으로 원인을 파악하고 복구할 수 있도록 단계별 플레이북을 작성하고 유지합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel12/bp02">REL12-BP02: 사후 분석 수행</Link></strong><br />
          <span>장애 발생 후 근본 원인 분석(RCA)을 통해 재발 방지 조치를 식별하고 아키텍처를 지속적으로 개선합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel12/bp03">REL12-BP03: 확장성 및 성능 요구사항 테스트</Link></strong><br />
          <span>부하 테스트를 정기적으로 수행하여 예상 피크 트래픽에서도 성능 목표를 달성하는지 검증합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel12/bp04">REL12-BP04: 카오스 엔지니어링을 사용하여 복원력 테스트</Link></strong><br />
          <span>AWS Fault Injection Service(FIS)를 사용하여 제어된 환경에서 장애를 주입하고 시스템의 복원력을 검증합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel12/bp05">REL12-BP05: 정기적으로 게임 데이 수행</Link></strong><br />
          <span>정기적인 게임 데이 훈련을 통해 팀이 실제 장애 상황에 대응하는 역량을 키우고 DR 절차를 검증합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
