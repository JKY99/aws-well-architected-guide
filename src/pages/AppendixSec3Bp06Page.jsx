import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec3Bp06Page() {
  return (
    <article className="doc-content">
      <h1>SEC03-BP06 — 수명 주기에 따른 액세스 관리</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 불필요한 접근 권한이 남아 보안 위험이 증가합니다.</p>
      </div>
      <p>
        주체의 수명 주기 전반에 걸쳐 권한을 모니터링하고 조정하여 불필요한 권한 위험을 줄입니다. 사용자 생성 시 적절한 접근 권한을 부여하고, 사용자 책임 변경에 따라 접근을 수정하며, 사용자가 더 이상 활동하지 않거나 조직을 떠날 때 접근을 제거합니다.
      </p>
      <h2>원하는 결과</h2>
      <ul>
        <li>주체 수명 주기 전반에 걸쳐 권한 모니터링 및 조정</li>
        <li>사용자 생성 시 적절한 접근 권한 부여</li>
        <li>사용자 책임 변경에 따른 접근 수정</li>
        <li>사용자 비활성화 또는 조직 이탈 시 접근 제거</li>
        <li>자동화를 통해 사용자/역할/그룹 변경 사항을 AWS 환경에 전파</li>
      </ul>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>초기에 필요한 것 이상의 광범위한 접근 권한 부여</li>
        <li>역할 및 책임 변화에 따라 접근 권한을 검토하고 조정하지 않음</li>
        <li>비활성화된 또는 퇴직한 ID에 활성 접근 권한 유지</li>
        <li>ID 생명주기 관리에 자동화 미활용</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>불필요한 권한으로 인한 보안 위험 감소</li>
        <li>권한 비대화(privilege creep) 방지</li>
        <li>ID 생명주기의 자동화된 관리</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>접근 관리 생명주기 프로세스(온보딩, 검토, 오프보딩)를 정의하고 문서화합니다.</li>
        <li>IAM 역할, 그룹, 권한 경계를 구현하여 접근을 집합적으로 관리합니다.</li>
        <li>SCIM 프로토콜을 사용하여 자격 증명 공급자로부터 IAM Identity Center로 사용자/그룹 정보를 동기화합니다.</li>
        <li>다양한 직무 역할에 대한 적절한 IAM 정책이 포함된 Permission Set을 생성합니다.</li>
        <li>정기적인 접근 검토를 구현하고 신속한 접근 취소 절차를 마련합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS IAM Identity Center — 중앙화된 ID 및 접근 관리</li>
        <li>SCIM — 사용자 자동 프로비저닝/디프로비저닝</li>
        <li>IAM Access Analyzer — 퍼블릭 및 교차 계정 접근 분석</li>
        <li>Permission Set — IAM Identity Center의 역할 기반 접근 정의</li>
      </ul>
      <PageNav />
    </article>
  );
}
