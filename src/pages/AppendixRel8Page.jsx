import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel8Page() {
  return (
    <article className="doc-content">
      <h1>REL 8 — 데이터를 어떻게 백업합니까?</h1>

      <p>
        데이터 손실을 방지하기 위해 정기적인 백업을 수행하고
        백업 데이터를 안전하게 보관합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/reliability/rel8/bp01">REL08-BP01: 자동 백업 활성화</Link></strong><br />
          <span>RDS 자동 백업, DynamoDB 지속적 백업, EBS 스냅샷 등 관리형 서비스의 자동 백업 기능을 활성화합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel8/bp02">REL08-BP02: 정기적인 백업 수행</Link></strong><br />
          <span>RPO(복구 시점 목표)에 맞는 백업 주기를 설정합니다. AWS Backup을 사용하여 중앙에서 백업을 관리합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel8/bp03">REL08-BP03: 백업 안전하게 보관</Link></strong><br />
          <span>백업 데이터를 별도의 AWS 계정이나 다른 리전에 복제하여 재해 시에도 복구가 가능하도록 합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel8/bp04">REL08-BP04: 정기적으로 백업 테스트 및 검증</Link></strong><br />
          <span>백업에서 복원을 정기적으로 테스트하여 백업이 실제로 사용 가능한지 검증합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel8/bp05">REL08-BP05: 백업 재해 복구 목표와 조율</Link></strong><br />
          <span>RTO(복구 시간 목표)와 RPO에 맞는 백업 전략을 수립합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
