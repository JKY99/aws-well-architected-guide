import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel9Page() {
  return (
    <article className="doc-content">
      <h1>REL 9 — 데이터를 어떻게 백업합니까?</h1>

      <p>
        복구 시점 목표(RPO)를 충족하도록 데이터, 애플리케이션 및 구성을 백업합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/reliability/rel9/bp01">REL09-BP01: 백업이 필요한 모든 데이터를 파악하고 백업하거나 소스에서 데이터를 재현</Link></strong><br />
          <span>데이터 소스를 파악하고 중요도에 따라 분류합니다. RPO를 기반으로 복구 전략을 수립하여 중요한 데이터 소스를 백업하거나 다른 소스에서 데이터를 재현합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel9/bp02">REL09-BP02: 백업 보안 및 암호화</Link></strong><br />
          <span>인증 및 권한 부여를 사용하여 백업에 대한 접근을 제어하고 감지합니다. 암호화를 사용하여 백업 데이터의 무결성이 손상되는 것을 방지하고 감지합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel9/bp03">REL09-BP03: 데이터 백업 자동 수행</Link></strong><br />
          <span>RPO 또는 데이터 세트의 변경에 따라 설정된 주기로 데이터 소스의 백업을 생성하는 자동화 프로세스를 구축합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel9/bp04">REL09-BP04: 백업 무결성 및 프로세스를 검증하기 위한 정기적인 데이터 복구 수행</Link></strong><br />
          <span>잘 정의된 메커니즘을 사용하여 정기적으로 백업에서 데이터를 복구하여 RTO 내에 복구가 가능하고 복원된 데이터에 손상이 없으며 데이터 손실이 RPO 내에 있는지 확인합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
