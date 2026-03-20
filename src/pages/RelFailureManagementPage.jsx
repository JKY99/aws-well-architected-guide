import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function RelFailureManagementPage() {
  return (
    <article className="doc-content">
      <h1>안정성 — 장애 관리</h1>

      <div className="doc-note">
        <div className="doc-note-title">Werner Vogels, Amazon.com CTO</div>
        <p>
          "장애는 필연적이며 라우터부터 하드 디스크, 운영체제부터 메모리까지 언젠가는 모두 실패합니다."
        </p>
      </div>

      <p>
        온프레미스 데이터센터에서는 저수준 하드웨어 장애가 일상적인 문제입니다.
        클라우드에서는 이러한 유형의 장애 대부분으로부터 보호받을 수 있습니다.
      </p>

      <ul>
        <li>
          <strong>Amazon EBS:</strong> 특정 가용 영역 내에서 자동으로 복제되어 99.999% 가용성을 목표로 설계됩니다.
        </li>
        <li>
          <strong>Amazon S3:</strong> 객체가 최소 3개 가용 영역에 분산 저장되어 연간 99.999999999%(11 9s) 내구성을 제공합니다.
        </li>
      </ul>

      <p>
        클라우드 공급자에 관계없이 장애는 여전히 워크로드에 영향을 미칠 수 있으므로,
        신뢰성이 필요한 워크로드에는 반드시 복원력을 구현해야 합니다.
      </p>

      <h2>모범 사례 항목</h2>
      <ul>
        <li>
          <strong>데이터 백업:</strong> 중요한 데이터를 정기적으로 백업합니다.
        </li>
        <li>
          <strong>장애 격리로 워크로드 보호:</strong> 장애가 전파되지 않도록 격리 경계를 설계합니다.
        </li>
        <li>
          <strong>컴포넌트 장애를 견디는 워크로드 설계:</strong> 개별 컴포넌트 장애 시에도 서비스를 유지합니다.
        </li>
        <li>
          <strong>안정성 테스트:</strong> 장애 시나리오를 시뮬레이션하여 복구 능력을 검증합니다.
        </li>
        <li>
          <strong>재해 복구(DR) 계획:</strong> RTO/RPO에 맞는 DR 전략을 수립하고 정기적으로 테스트합니다.
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
