import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps7Bp02Page() {
  return (
    <article className="doc-content">
      <h1>OPS07-BP02 — 운영 준비 검토의 일관성 확보</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>

      <p>
        조직의 모범 사례가 포함된 운영 준비 검토(ORR) 체크리스트를 보유합니다.
        워크로드 시작 전에 ORR을 수행하고, 워크로드 수명 주기 동안 정기적으로 실행합니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        조직의 모범 사례가 포함된 ORR 체크리스트를 보유합니다.
        ORR은 워크로드 시작 전에 수행됩니다.
        ORR은 워크로드 수명 주기 전반에 걸쳐 정기적으로 실행됩니다.
        필요한 절차가 워크로드 시작 시 갖춰져 있습니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>운영 가능 여부를 알지 못한 채 워크로드를 시작하는 경우</li>
        <li>거버넌스 및 보안 요구사항이 워크로드 인증 과정에 포함되지 않는 경우</li>
        <li>워크로드가 정기적으로 재평가되지 않는 경우</li>
        <li>필요한 절차 없이 워크로드가 시작되는 경우</li>
        <li>여러 워크로드에서 동일한 근본 원인 실패가 반복되는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>워크로드에 아키텍처, 프로세스, 관리 모범 사례가 포함됨</li>
        <li>교훈이 ORR 프로세스에 통합됨</li>
        <li>워크로드 시작 시 필요한 절차가 갖춰져 있음</li>
        <li>워크로드 소프트웨어 수명 주기 전반에 걸쳐 ORR이 실행됨</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>ORR을 사용하여 팀이 워크로드를 안전하게 운영할 수 있는지 검증합니다.</li>
        <li>보안, 운영, 개발의 핵심 이해관계자를 모읍니다.</li>
        <li>요구사항을 수집합니다(처음에는 30개 이하의 항목으로 시작).</li>
        <li>요구사항을 스프레드시트 또는 AWS Well-Architected Tool 사용자 정의 렌즈로 편성합니다.</li>
        <li>ORR을 수행할 워크로드를 식별하고 체크리스트를 실행하여 발견 사항을 해결합니다.</li>
        <li>시간이 지남에 따라 모범 사례를 계속 추가합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Well-Architected Tool — ORR 개발을 위한 사용자 정의 렌즈</li>
        <li>AWS Config — 모범 사례 자동 감지</li>
        <li>AWS Control Tower — 자동 시행을 위한 가드레일</li>
        <li>AWS Security Hub — 보안 제어 감지</li>
      </ul>

      <PageNav />
    </article>
  );
}
