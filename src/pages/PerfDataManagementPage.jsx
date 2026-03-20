import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function PerfDataManagementPage() {
  return (
    <article className="doc-content">
      <h1>성능 효율성 — 데이터 관리</h1>

      <p>
        데이터 패턴을 분석하여 워크로드 지원에 필요한 프로비저닝된 스토리지를 줄이는
        데이터 관리 관행을 구현하세요.
      </p>

      <h2>주요 권장사항</h2>
      <ul>
        <li>
          <strong>수명 주기 기능 활용:</strong> 요구사항이 감소하면 데이터를 더 효율적이지만
          성능이 낮은 스토리지로 이동합니다.
        </li>
        <li>
          <strong>불필요한 데이터 삭제:</strong> 더 이상 필요하지 않은 데이터를 제거합니다.
        </li>
        <li>
          <strong>접근 패턴에 맞는 스토리지 선택:</strong> 데이터 접근 패턴에 따라
          최적의 스토리지 솔루션을 선택합니다.
        </li>
      </ul>

      <h2>데이터베이스 최적화</h2>
      <ul>
        <li>
          정보 저장소(데이터베이스 시스템 등)에 읽기 전용 복제본을 동적으로 추가하여
          기본 데이터베이스의 부하를 감소시킵니다.
        </li>
        <li>
          그래프, 시계열, 인메모리 등 대안 데이터베이스 솔루션 평가를 고려합니다.
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
